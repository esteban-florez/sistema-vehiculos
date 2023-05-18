<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $components = [];

        for ($i = 1; $i <= 31; $i++) { 
            $components[] = [
                'id' => $i,
                'name' => "Componente {$i}"
            ];
        }

        Type::create([
            'name' => 'URAL',
            'components' => json_encode($components),
        ]);
    }
}
