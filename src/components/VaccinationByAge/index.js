// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeList} = props

  return (
    <div className="vaccination-coverage-bg">
      <h1 className="vaccination-title"> Vaccination By Age</h1>
      <PieChart width={1000} height={500}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByAgeList}
          startAngle={0}
          endAngle={360}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{paddingTop: 10}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
