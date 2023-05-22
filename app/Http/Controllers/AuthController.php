<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function create() {
        return view('login');
    }

    public function store(Request $request)
    {
        $credentials = [
            'email' => $request->input('email', ''),
            'password' => $request->input('password', '')
        ];

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('home');
        }
        
        return back()->withErrors([
            'login' => 'Las credenciales no son válidas.',
        ]);
    }
    
    public function destroy(Request $request)
    {
        Auth::logout();
        
        $request->session()->invalidate();
        
        $request->session()->regenerateToken();
        
        return redirect()->route('login');
    }
}
