import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    const handlerChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = (event) => {
        event.preventDefault(); //Huỷ bỏ event nếu nó có thể huỷ mà không dừng sự lan rộng(propagation) của event tới phần khác. Event.preventDefault sẽ đảm bảo rằng form không bao giờ được gửi, và nó đã giành được quyền kiểm soát và ngăn chặn sự kiện đó khi click. Đó là những gì chúng ta đã làm.

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Sửa nội dung task..."
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handlerChange}
                        ref={inputRef}
                    />
                    <button
                        className="todo-button edit">cập nhật
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Task today ..."
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handlerChange}
                        ref={inputRef}
                    />
                    <button
                        className="todo-button">Thêm
                    </button>
                </>)
            }
        </form>
    );
}

export default TodoForm