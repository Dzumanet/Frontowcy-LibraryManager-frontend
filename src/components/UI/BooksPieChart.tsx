import { PieChart, PieChartProps } from "@mui/x-charts/PieChart";
import { legendClasses } from "@mui/x-charts";
import { Meta } from "../../types/meta.ts";

const otherProps: Partial<PieChartProps> = {
    width: 400,
    height: 200,
    sx: {
        [`.${legendClasses.root}`]: {
            transform: 'translate(80px, 0)',
        },
    },
};

type BooksPieChartProps = {
    meta: Meta;
}

export const BooksPieChart = ({ meta }: BooksPieChartProps) => {
    return <PieChart
        series={[
            {
                data: [
                    {
                        id: 1,
                        value: meta.currentlyBorrowed ?? 0,
                        color: "#7ba4dc",
                        label: "Currently Borrowed"
                    },
                    { id: 2, value: meta.overdueBooks ?? 0, color: "#FAE3E3", label: "Overdue" },
                    {
                        id: 3,
                        value: meta.returnedOnTime ?? 0,
                        color: "#E8F5E9",
                        label: "Returned on time"
                    },
                ],
                valueFormatter: (v) => `${v.value} books`,
                innerRadius: 15,
                paddingAngle: 1,
                cornerRadius: 4,
            },
        ]}
        {...otherProps}
    />;
};