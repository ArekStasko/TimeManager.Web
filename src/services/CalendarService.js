import {Day} from "../components/Day";


export const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const GetMonthLayout = () => {
        const months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

        const data = [];
        const date = new Date();

        for(let i = 0; i<months[date.getMonth()]; i++){
            data.push(<Day current={i === date.getDay()} />)
        }

        return data;
}