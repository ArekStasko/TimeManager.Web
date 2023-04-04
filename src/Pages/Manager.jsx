import BarChart from "../components/Charts";


const Manager = () => {

    //this is data for charts tests purposes
    const data1 = [3, 1, 5, 8, 20, 10, 15, 30];
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: "Test Data Chart",
                data: data1,
                backgroundColor: "rgba(234, 87, 102, 0.6)",
                borderColor: "rgba(234, 87, 102, 0.6)",
                fill: false,
                pointHoverRadius: 20,
                pointHoverBorderWidth: 5,
                type: "line",
                order: 0,
            },
        ],
    };


    return(
        <div className="manager">
            <BarChart data={data} />
        </div>
    )
}

export default Manager