import React from "react";

const Calendar = () => {
    const holidays = [
        { name: "New Year’s Eve", shippingDate: "Dec. 5", holidayDate: "Dec. 31" },
        { name: "Valentine’s Day", shippingDate: "Jan. 19", holidayDate: "Feb. 14" },
        { name: "Saint Patrick’s Day", shippingDate: "Feb. 23", holidayDate: "March 17" },
        { name: "Easter Monday", shippingDate: "March 4", holidayDate: "April 1" },
        { name: "Saint Jean Baptiste Day", shippingDate: "May 31", holidayDate: "June 24" },
        { name: "Canada Day", shippingDate: "June 7", holidayDate: "July 1" },
        { name: "Thanksgiving Day", shippingDate: "Sep. 13", holidayDate: "Oct. 14" },
        { name: "Halloween", shippingDate: "Sep.27", holidayDate: "Oct. 31" },
        { name: "Christmas", shippingDate: "Nov. 29", holidayDate: "Dec. 25" },
    ];

    return (
        <div className="relative mx-auto overflow-hidden rounded shadow-md border-2 border-solid border-[#f7f6f2] max-w-7xl p-6 mb-4">
            <table className="w-full">
                <thead>
                    <tr className="bg-[#f7f6f2]">
                        <th className="font-semibold text-[#c0876a] text-[24px] px-4 py-2">Holiday</th>
                        <th className="font-semibold text-[#c0876a] text-[24px] px-4 py-2">Shipping Date</th>
                        <th className="font-semibold text-[#c0876a] text-[24px] px-4 py-2">Holiday Date</th>
                    </tr>
                </thead>
                <tbody>
                    {holidays.map((holiday, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f7f6f2]'}>
                            <td className="text-center text-[#342f19cc] text-[20px] px-4 py-2">{holiday.name}</td>
                            <td className="text-center text-[#342f19cc] text-[20px] px-4 py-2">{holiday.shippingDate}</td>
                            <td className="text-center text-[#342f19cc] text-[20px] px-4 py-2">{holiday.holidayDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
