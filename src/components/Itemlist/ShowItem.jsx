
import React from 'react'


const ShowItem = ({ todoTitle, status, handleDelete, updateStatusTodoItem }) => {
    return (
        <tr>
            <td>{todoTitle}</td>

            <td>
                <div className={`status ${status ? 'completed' : 'working'}`} onClick={() => {
                    updateStatusTodoItem()
                }}>
                    {
                        status ? 'Completed' : 'Working'
                    }
                </div>
            </td>
            <td>

                <button className="delete" onClick={() => {
                    handleDelete();
                }}>Delete</button>
            </td>
        </tr>
    )
}

export default ShowItem