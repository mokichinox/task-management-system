<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Exception;

class TaskController extends Controller
{
    public function index()
    {
        try {
            $tasks = auth()->user()->tasks()->latest()->get();
        } catch (Exception $e) {
            // If tasks table doesn't exist or there's an error, return empty array
            $tasks = collect([]);
        }
        
        return Inertia::render('Dashboard', [
            'tasks' => $tasks
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:pending,in_progress,completed',
            'priority' => 'required|in:low,medium,high',
            'due_date' => 'nullable|date',
        ]);

        // Add the user_id to the validated data
        $validatedData['user_id'] = auth()->id();

        // Create the task instance manually
        $task = new Task();
        $task->title = $validatedData['title'];
        $task->description = $validatedData['description'];
        $task->status = $validatedData['status'];
        $task->priority = $validatedData['priority'];
        $task->due_date = $validatedData['due_date'];
        $task->user_id = $validatedData['user_id'];
        $task->save();

        return redirect()->back()->with('success', 'Task created successfully!');
    }

    public function update(Request $request, Task $task)
    {
        // Check if user owns the task
        if ($task->user_id !== auth()->id()) {
            abort(403);
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:pending,in_progress,completed',
            'priority' => 'required|in:low,medium,high',
            'due_date' => 'nullable|date',
        ]);

        // Update properties individually to avoid mass assignment
        $task->title = $request->title;
        $task->description = $request->description;
        $task->status = $request->status;
        $task->priority = $request->priority;
        $task->due_date = $request->due_date;
        $task->save();

        return redirect()->back()->with('success', 'Task updated successfully!');
    }

    public function destroy(Task $task)
    {
        // Check if user owns the task
        if ($task->user_id !== auth()->id()) {
            abort(403);
        }

        $task->delete();

        return redirect()->back()->with('success', 'Task deleted successfully!');
    }
}
