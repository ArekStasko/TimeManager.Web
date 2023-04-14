import {Day} from "../components/Day";


export const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


//WARNING -- This method has spaghetti code and it is dirty - i know - i will clean in later ( yes i will ;D )
export const GetMonthLayout = () => {
        const months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

        const data = [];
        const date = new Date();

        let leftDays = months[date.getMonth()]%7;

        for(let i = 0; i < 4; i++){
                let weekDays = []
                for(let i = 0; i<7; i++){
                        weekDays.push(<Day current={i === date.getDay()} />)
                }
                data.push(weekDays);
        }
        let leftDaysArr = [];
        for(let i = 0; i < leftDays; i++){
                leftDaysArr.push(<Day current={i === date.getDay()} />)
        }
        data.push(leftDaysArr);

        console.log(data);
        return data;
}