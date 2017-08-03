<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App;
use App\User;
use App\Mission;
use App\Specification;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class UserController extends BaseController
{
    /**
     * Get authenticated user.
     *
     * @return \Illuminate\Http\Response
     */
    public function getZivis()
    {

        //$zivis = DB::table('users')->where('zdp', '>', 0)->get();
        $zivis = DB::table('missions')
            ->join('users', 'missions.user', '=', 'users.id')
            ->join('specifications', 'missions.specification', '=', 'specifications.id')
            ->join('roles', 'roles.id', '=', 'users.role')
            ->whereNull('users.deleted_at')
            ->select('users.id', 'users.zdp', 'users.first_name', 'users.last_name',  'missions.start', 'missions.end', 'users.work_experience', 'specifications.active', 'roles.name AS role', 'roles.id AS role_id')
            ->get();

        /*
        $zivis = DB::table('missions')->get();
        $zivis = DB::table('specifications')->get();
        */

        return new JsonResponse($zivis);
    }
}