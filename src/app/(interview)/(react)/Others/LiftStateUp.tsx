// import * as React from 'react';
import React, { useState, useEffect, useRef } from 'react';

// 1. Passing Value to SubChild
// 2. Props uplifting fix

export default function LiftStateUpMain() {
    const handleChangeName = (name: string) => {
        console.log('Name form Child2 is :', name);
    };
    return (
        <>
            <h2>State UP</h2>
            <Child1 color="red" handleChangeName={handleChangeName} />
        </>
    );
}

function Child1(props:any) {
    const { color, handleChangeName } = props;
    return (
        <>
            <Child2 color={color} handleChangeName={handleChangeName} />
        </>
    );
}

function Child2(props:any) {
    const handleChangeName = () => {
        props.handleChangeName('VIJAY');
    };
    return (
        <>
            <div>
                {props.color}
                <button type="button" onClick={handleChangeName}>
                    {' '}
                    Change Name{' '}
                </button>
            </div>
        </>
    );
}
