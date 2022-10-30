<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Super Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('11445522')
        ]);

        User::create([
            'name' => 'Karim osama',
            'email' => 'karimosama1041997@gmail.com',
            'password' => bcrypt('11445522')
        ]);
    }
}
