<?php

namespace App\Http\Controllers;

use App\Models\Debtor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DebtorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Debtor::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validation->fails()) {
            return response($validation->errors(), 501);
        }
        $debtor = new Debtor();
        $debtor->name = $request->name;
        $debtor->save();

        return $debtor;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Debtor $debtor)
    {
        return $debtor;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Debtor $debtor)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validation->fails()) {
            return response($validation->errors(), 501);
        }
        $debtor->name = $request->name;
        $debtor->save();

        return $debtor;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Debtor $debtor)
    {
        $debtor->delete();
    }
}
