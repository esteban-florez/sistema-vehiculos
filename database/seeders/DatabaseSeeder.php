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
        Type::create([
            'name' => 'URAL',
            'components' => json_encode([
                'Componente 1',  'Componente 2',
                'Componente 3',  'Componente 4',
                'Componente 5',  'Componente 6',
                'Componente 7',  'Componente 8',
                'Componente 9',  'Componente 10',
                'Componente 11', 'Componente 12',
                'Componente 13', 'Componente 14',
                'Componente 15', 'Componente 16',
                'Componente 17', 'Componente 18',
                'Componente 19', 'Componente 20',
                'Componente 21', 'Componente 22',
                'Componente 23', 'Componente 24',
                'Componente 25', 'Componente 26',
                'Componente 27', 'Componente 28',
                'Componente 29', 'Componente 30',
                'Componente 31'
            ]),
        ]);
    }
}
