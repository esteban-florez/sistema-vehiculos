<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
    public function create()
    {
        return view('signup');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:50'],
            'email' => ['required', 'email', 'min:6', 'max:50'],
            'password' => ['required', 'max:20', Password::defaults()],
        ]);

        $user = User::create($data);

        Auth::login($user);

        return redirect()
            ->route('home');
    }
}
