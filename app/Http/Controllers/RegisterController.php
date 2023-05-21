<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class RegisterController extends Controller
{
    public function create()
    {
        return view('signup');
    }

    public function store(Request $request)
    {
        $data = $request->validated();

        User::create($data);

        return redirect()
            ->route('login');
    }
}
