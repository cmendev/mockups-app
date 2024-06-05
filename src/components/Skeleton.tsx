import React from 'react'

export const Skeleton = () => {
    return (
        <ol className="grid max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <li className='m-4'>
                <div className="flex flex-col gap-4 p-6">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </li>
            <li className='m-4'>
                <div className="flex flex-col gap-4 p-6">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </li>
            <li className='m-4'>
                <div className="flex flex-col gap-4 p-6">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </li>
            <li className='m-4'>
                <div className="flex flex-col gap-4 p-6">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </li>
            <li className='m-4'>
                <div className="flex flex-col gap-4 p-6">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </li>
            <li className='m-4'>
                <div className="flex flex-col gap-4 p-6">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </li>
        </ol>
    )
}
