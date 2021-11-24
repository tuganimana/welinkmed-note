/* eslint-disable */
import React from 'react'
import Chart from "chart.js/auto"
import { Pie } from "react-chartjs-2"


export default function PieChart() {
	return (
		<div className="w-3/4 flex items-center justify-center m-auto">
			<Pie 
			className="pt-2 pb-2"
				data={{
					labels: ['Missed Orders', 'Received', 'On Date'],
					datasets: [{
						label: '# of Orders',
						data: [12, 48, 40],
						backgroundColor: [
							'rgba(252, 165, 165, 0.3)',
							'rgba(52, 211, 153, 0.3)',
							'rgba(147, 197, 253, 0.3)',
						
						],
						borderColor: [
							'rgba(252, 165, 165, 0.6)',
							'rgba(52, 211, 153, 0.6)',
							'rgba(147, 197, 253, 0.6)',
						],
						borderWidth: 1
					}]
				}}
				options={{
					maintainAspectRatio: true
				}}
				height={100}
				width={100}
			/>
		</div>
	)
}