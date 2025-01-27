"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Card from "@/components/Card/Card";

export default function Home() {
    const [input, setInput] = useState<string>(""); // Вводимое значение
    const [todoList, setTodoList] = useState<string[]>([]); // Список значений

    const getNewTodo = () => {
        if(input.length > 0){
            setTodoList((prevState) => [...todoList, input])
            setInput("")
        }
    }

    return (
        <div className="flex justify-between w-full h-screen">
            <div className="w-1/2 h-screen flex justify-center items-center bg-black space-x-2">
                <Input
                    className="w-8/12 bg-white"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // Обновляем текущее значение
                />
                <Button
                    className="bg-white text-black hover:text-white"
                    onClick={getNewTodo}
                >
                    Создать
                </Button>
            </div>
            <div className="w-1/2 h-full h-screen flex justify-center items-center bg-white">
                <div className="flex-1">
                    {
                        todoList.length > 0
                        ?
                            <ul>
                            {
                                todoList.map(( value, item) => (
                                    <li key={item} >
                                        <Card value={value} />
                                    </li>
                                ))
                            }
                            </ul>
                        :
                            <div>Напиши задачу</div>
                    }
                </div>
            </div>
        </div>
    );
}
