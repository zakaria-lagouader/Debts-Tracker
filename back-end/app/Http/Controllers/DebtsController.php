<?php

namespace App\Http\Controllers;

use App\Models\Debt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DebtsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Debt::all();
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
            'amount' => 'required|numeric',
            'debtor_id' => 'required',
        ]);
        if ($validation->fails()) {
            return response($validation->errors(), 501);
        }

        $debt = new Debt();
        $debt->name = $request->name;
        $debt->amount = $request->amount;
        $debt->debtor_id = $request->debtor_id;
        $debt->save();
        return $debt;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Debt $debt)
    {
        return $debt;
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
    public function update(Request $request, Debt $debt)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required',
            'amount' => 'required|numeric',
        ]);
        if ($validation->fails()) {
            return response($validation->errors(), 501);
        }

        $debt->name = $request->name;
        $debt->amount = $request->amount;
        $debt->save();
        return $debt;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Debt $debt)
    {
        $debt->delete();
    }
}
