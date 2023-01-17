import React, { useState } from 'react'

export default function UserSearch() {
    const [text, setText] = useState('')

    const handleChange = (e) => setText(e.target.value)
    return (
        <div className="flex flex-col items-center justify-center">
            <div className='grid grid-cols-1 mb-8 gap-8 items-center justify-center'>
                <div>
                    <form>
                        <div className="form-control">
                            <div className="relative">
                                <input type="text"
                                    className='w-full pr-40 bg-gray-200 input input-lg text-black rounded-2xl '
                                    placeholder='Search'
                                    value={text}
                                    onChange={handleChange}

                                />

                                <button type='submit' className="absolute top-0 right-0 text-color- rounded-l-none rounded-r-xl w-36 btn btn-primary btn-lg" style={{borderTopRightRadius: '0.8rem', borderBottomRightRadius: '0.8rem'}}>Go</button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
            <div>
                <button className="btn btn-ghost btg-lg rounded-xl">Clear</button>
            </div>
        </div>
    )
}
