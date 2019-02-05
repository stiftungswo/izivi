<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateReportSheetDefaults extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('report_sheets', function (Blueprint $table) {
            $table->integer('additional_workfree')->default(0)->change();
            $table->integer('ill')->default(0)->change();
            $table->integer('holiday')->default(0)->change();
            $table->integer('vacation')->default(0)->change();
            $table->bigInteger('driving_charges')->default(0)->change();
            $table->bigInteger('extraordinarily')->default(0)->change();
            $table->integer('state')->unsigned()->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('report_sheets', function (Blueprint $table) {
            $table->integer('additional_workfree')->change();
            $table->integer('ill')->change();
            $table->integer('holiday')->change();
            $table->integer('vacation')->change();
            $table->bigInteger('driving_charges')->change();
            $table->bigInteger('extraordinarily')->change();
            $table->integer('state')->unsigned()->change();
        });
    }
}
