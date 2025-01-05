import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

const ServiceCard = ({ icon: Icon, title, srv_1, srv_2, srv_3, srv_4, srv_5, srv_6 }) => {
    return (
        <div className='service_card p-3 rounded-md border'>
            <Icon className="size-10 text-slate-800" />
            <h3 className="text-lg md:text-2xl font-semibold mt-6 mb-3">{title}</h3>

            <div className='text-sm'>
                {srv_1 ? 
                <p className='flex items-center gap-x-1 mb-1 font-medium text-gray-600'>
                    <ChevronDoubleRightIcon className="size-3 text-gray-600" />
                    {srv_1}
                </p> : undefined}

                {srv_2 ? 
                <p className='flex items-center gap-x-1 mb-1 font-medium text-gray-600'>
                    <ChevronDoubleRightIcon className="size-3 text-gray-600" />
                    {srv_2}
                </p> : undefined}

                {srv_3 ? 
                <p className='flex items-center gap-x-1 mb-1 font-medium text-gray-600'>
                    <ChevronDoubleRightIcon className="size-3 text-gray-600" />
                    {srv_3}
                </p> : undefined}

                {srv_4 ? 
                <p className='flex items-center gap-x-1 mb-1 font-medium text-gray-600'>
                    <ChevronDoubleRightIcon className="size-3 text-gray-600" />
                    {srv_4}
                </p> : undefined}

                {srv_5 ? 
                <p className='flex items-center gap-x-1 mb-1 font-medium text-gray-600'>
                    <ChevronDoubleRightIcon className="size-3 text-gray-600" />
                    {srv_5}
                </p> : undefined}

                {srv_6 ? 
                <p className='flex items-center gap-x-1 mb-1 font-medium text-gray-600'>
                    <ChevronDoubleRightIcon className="size-3 text-gray-600" />
                    {srv_6}
                </p> : undefined}
            </div>
        </div>
    );
};

export default ServiceCard;