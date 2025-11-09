<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    /**
     * Display a listing of feedback
     */
    public function index()
    {
        $feedback = Feedback::orderBy('created_at', 'desc')
            ->take(50)
            ->get();

        return response()->json($feedback);
    }

    /**
     * Store newly created feedback
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
            'rating' => 'nullable|integer|min:1|max:5',
        ]);

        $sessionId = $request->session()->getId();

        $feedback = Feedback::create([
            'session_id' => $sessionId,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'message' => $validated['message'],
            'rating' => $validated['rating'] ?? null,
        ]);

        return response()->json([
            'message' => 'Thank you for your feedback!',
            'feedback' => $feedback
        ], 201);
    }
}
