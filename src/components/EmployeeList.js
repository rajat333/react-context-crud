import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { GlobalContext } from '../context/GlobalState';

export const EmployeeList = () => {
	const { employees, removeEmployee, editEmployee } = useContext(GlobalContext);
	return (
		<React.Fragment>
			{employees.length > 0 ? (
				<React.Fragment>
					{employees.map((employee) => (

						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="140"
								image="./"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{ employee.name }
								</Typography>
								<Typography variant="body2" color="text.secondary">
                                    { employee.designation }
									{/* Lizards are a widespread group of squamate reptiles, with over 6,000 species,
									ranging across all continents except Antarctica */}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">
                                    <Link to={ `edit/${employee.id }` }>
                                    Edit
                                    </Link>
                                    </Button>
								<Button size="small"
                                 onClick= { () => removeEmployee(employee.id) }
                                >Remove</Button>
							</CardActions>
						</Card>
					))}
				</React.Fragment>
			) : (
				<p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
			)}
		</React.Fragment>
	);
};
