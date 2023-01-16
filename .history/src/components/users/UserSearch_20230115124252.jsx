import React from 'react'

export default function UserSearch() {
    return <div className="grid grid-cols-1 xl:grid lg:grid-cols-2 md:grid-cols-2 mb-8 bg-slate-500 gap-8">
        <div>
            <form>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input lg text-black" />
                    </div>
                </div>
            </form>
        </div>

        <div>
            <button className="btn btn-ghost btg-lg">Clear</button>
        </div>
    </div>
}
