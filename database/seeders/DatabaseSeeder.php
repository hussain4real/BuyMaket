<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        Product::factory()->count(100)->create();
        Category::factory()->count(7)->create();

       foreach (Product::all() as $product) {
           $categories = Category::inRandomOrder()->take(rand(1,2))->pluck('id');
           $product->categories()->attach($categories);
       }
    }
}
