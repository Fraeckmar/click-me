<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'John Doe',//$this->faker->name(),
            'username' => 'johndoe',//$this->faker->unique()->safeEmail(),            
            'email' => 'johndoe@gmail',
            'email_verified_at' => now(),
            'password' => Hash::make('Password123'),
            'remember_token' => Str::random(10),
        ];
    }
}
