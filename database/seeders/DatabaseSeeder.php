<?php

namespace Database\Seeders;

use App\Models\ComponentName;
use App\Models\Type;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $type = Type::create([
            'name' => 'URAL',
        ]);

        for ($i = 1; $i <= 31; $i++) { 
            ComponentName::create([
                'name' => "Componente {$i}",
                'type_id' => $type->id,
            ]);
        }
    }
}
