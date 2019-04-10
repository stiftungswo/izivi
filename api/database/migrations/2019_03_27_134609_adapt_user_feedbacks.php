<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AdaptUserFeedbacks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_feedback_questions', function (Blueprint $table) {
            $table->addColumn('integer', 'page')->after('new_page');
        });

        $feedbacks = DB::table('user_feedback_questions')
            ->select('id', 'new_page')
            ->orderBy('pos')
            ->get();

        $current_page = 1;
        $feedbacks->each(function($feedback) use (&$current_page) {
            $current_page += $feedback->new_page;

            DB::table('user_feedback_questions')->where('id', $feedback->id)
                ->update(['page' => $current_page]);
        });

        Schema::table('user_feedback_questions', function (Blueprint $table) {
            $table->dropColumn('new_page');
        });

        DB::table('user_feedback_questions')->where('type', 3)->update(['type' => 1]);
        DB::table('user_feedback_questions')->where('type', 4)->update(['type' => 3]);
        DB::table('user_feedback_questions')->where('type', 5)->update(['type' => 4]);
        DB::table('user_feedback_questions')->where('type', 6)->update(['type' => 5]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_feedback_questions', function (Blueprint $table) {
            $table->dropColumn('page');
            $table->addColumn('integer', 'new_page')->default(0);
        });
        DB::table('user_feedback_questions')->where('type', 5)->update(['type' => 6]);
        DB::table('user_feedback_questions')->where('type', 4)->update(['type' => 5]);
        DB::table('user_feedback_questions')->where('type', 3)->update(['type' => 4]);
    }
}
