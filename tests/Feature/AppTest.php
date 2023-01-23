<?php

namespace Tests\Feature;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AppTest extends TestCase
{
    /** 
     * Check User registration
     */
    public function test_user_registration()
    {
        $users = User::where('email', '=', 'janedoe@gmail.com')->first();
        if($users === null) {
            $response = $this->post('/api/users', [
                'name' => 'Jane Doe ',
                'email' => 'janedoe@gmail.com',
                'username' => 'janedoe',
                'password' => 'Password123'
            ]);
            $response->assertJsonStructure(['id', 'email', 'username']);
        }        
    }

    /** 
     * Add new counts
     */
    public function test_add_new_counts()
    {
        $user = User::first();
        if ($user) {
            $response = $this->post('/api/counts', [
                'user_id' => $user->id,
                'count' => 5,
                'created_at' => Carbon::now()
            ]);
            $response->assertJsonStructure(['id', 'count']);
        }               
    }
}
