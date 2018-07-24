<?php

use App\Holiday;
use Illuminate\Database\Seeder;

class HolidayTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Holiday::class, 15)->create();
    }
}
