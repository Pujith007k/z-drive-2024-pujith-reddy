import {Component} from 'react'
import {Table} from 'antd'
import{ Pagination } from "antd";

 const columns=  [{
                    title: 'Name',
                    dataIndex: 'Name',
                        },
                        {
                        title:'Region',
                        dataIndex:'Region',
                        sorter: {
                            compare: (a, b) => a.Region - b.Region,
    
                        }
                        },
                        {
                        title: 'Subregion',
                        dataIndex: 'Subregion',
                       
                        },
                        {
                        title: 'Population',
                        dataIndex: 'Population',
                        sorter: {
                        compare: (a, b) => a.Population - b.Population,
      
                        },
                        },
   
                        {title:"Continents",
                        dataIndex:"Continents[0]",
                        }
            ];


class DataTable extends Component{
    state={List:[]}

    componentDidMount(){
        this.getDataList()
    }

    getDataList=async()=>{
        const options={method:'GET'}
        const response=await fetch(" https://restcountries.com/v3.1/all ",options)
       
        const data=await response.json()
        this.setState({List:data})
    }
    render(){
        const {List}=this.state
       
        const dataList=List.map(eachItem=>({Name:eachItem.name.common,Region:eachItem.region,Subregion:eachItem.subregion,Population:eachItem.population,Continents:eachItem.continents[0]}))
       console.log(dataList)
        return(
        <div>
            <h1>Data Table</h1>
            <Table columns={columns} data={dataList} Pagination defaultCurrent={1} total={5} ></Table>
        </div>)
    }
}

export default DataTable