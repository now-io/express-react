import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import withStyles from '@material-ui/core/styles/withStyles'



var styles = theme=>({
  root:{
    width:'100%',
    marginTop: theme.spacing(3),
    overflowX:"auto",
  },
  table:{
    minWidth:1080
  }
})
var customers=[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'서지원',
    'birth':'932104',
    'gender':'남자',
    'job':'취준생',
   
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'앙꼬',
    'birth':'981111',
    'gender':'여자',
    'job':'강아지',
     
    },
    {
      'id':3,
      'image':'https://placeimg.com/64/64/3',
      'name':'로다',
      'birth':'971214',
      'gender':'여자',
      'job':'학생',
       
      },

]
class App extends React.Component {
  render() {
  var {classes} = this.props;
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
    <TableBody>
    
        {
        customers.map(c=>{

          return (

            <Customer 
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birth={c.birth}
              gender={c.gender}
              job={c.job}
            ></Customer>
          )
          
        })
        }
        
    </TableBody>
    </Table>
    </Paper>
  );
 }
}

export default withStyles(styles)(App);
