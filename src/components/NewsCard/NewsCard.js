import React from "react";
import {
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";

import useStyles from "./styles.js";

const NewsCard = ({
	article: { description, publishedAt, source, title, url, urlToImage },
	i,
}) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea href={url} target="_blank">
				<CardMedia
					className={classes.media}
					image={
						urlToImage ||
						"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Falhovik%2Falhovik1709%2Falhovik170900028%2F86470277-%25EC%2586%258D%25EB%25B3%25B4-%25EB%25B0%25B0%25EA%25B2%25BD-%25EC%2584%25B8%25EA%25B3%2584-%25EA%25B8%2580%25EB%25A1%259C%25EB%25B2%258C-tv-%25EB%2589%25B4%25EC%258A%25A4-%25EB%25B0%25B0%25EB%2584%2588-%25EB%2594%2594%25EC%259E%2590%25EC%259D%25B8.jpg&imgrefurl=https%3A%2F%2Fkr.123rf.com%2Fphoto_86470277_%25EC%2586%258D%25EB%25B3%25B4-%25EB%25B0%25B0%25EA%25B2%25BD-%25EC%2584%25B8%25EA%25B3%2584-%25EA%25B8%2580%25EB%25A1%259C%25EB%25B2%258C-tv-%25EB%2589%25B4%25EC%258A%25A4-%25EB%25B0%25B0%25EB%2584%2588-%25EB%2594%2594%25EC%259E%2590%25EC%259D%25B8.html&tbnid=JK3GyFrFZY_cLM&vet=12ahUKEwinkZKVjODyAhVIEKYKHXHGBX0QMygmegUIARCFAg..i&docid=omcFgqeC9bH01M&w=1300&h=776&q=news&ved=2ahUKEwinkZKVjODyAhVIEKYKHXHGBX0QMygmegUIARCFAg"
					}
				/>
				<div className={classes.details}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="h2"
					>
						{new Date(publishedAt).toDateString()}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="h2"
					>
						{source.name}
					</Typography>
				</div>
				<Typography className={classes.title} gutterBottom variant="h5">
					{title}
				</Typography>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary">
					Learn More
				</Button>
				<Typography variant="h5" color="textSecondary">
					{i + 1}
				</Typography>
			</CardActions>
		</Card>
	);
};

export default NewsCard;
