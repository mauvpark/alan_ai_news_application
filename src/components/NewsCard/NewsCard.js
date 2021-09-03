import React, { useState, useEffect, createRef } from "react";
import {
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import classNames from "classnames";

import useStyles from "./styles.js";

const NewsCard = ({
	article: {
		description,
		publishedAt,
		source,
		title,
		url,
		urlToImage,
		name,
		category,
		country,
	},
	activeArticle,
	i,
}) => {
	const classes = useStyles();
	const [elRefs, setElRefs] = useState([]);
	const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

	useEffect(() => {
		setElRefs((refs) =>
			Array(20)
				.fill()
				.map((_, j) => refs[j] || createRef())
		);
	}, []);

	useEffect(() => {
		if (i === activeArticle && elRefs[activeArticle]) {
			scrollToRef(elRefs[activeArticle]);
		}
	}, [i, activeArticle, elRefs]);

	return (
		<Card
			ref={elRefs[i]}
			className={classNames(
				classes.card,
				activeArticle === i ? classes.activeCard : null
			)}
		>
			<CardActionArea href={url} target="_blank">
				<CardMedia
					className={classes.media}
					image={
						urlToImage ||
						"https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900028/86470277-%EC%86%8D%EB%B3%B4-%EB%B0%B0%EA%B2%BD-%EC%84%B8%EA%B3%84-%EA%B8%80%EB%A1%9C%EB%B2%8C-tv-%EB%89%B4%EC%8A%A4-%EB%B0%B0%EB%84%88-%EB%94%94%EC%9E%90%EC%9D%B8.jpg"
					}
				/>
				<div className={classes.details}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="h2"
					>
						{publishedAt
							? new Date(publishedAt).toDateString()
							: country}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="h2"
					>
						{source ? source.name : category}
					</Typography>
				</div>
				<Typography className={classes.title} gutterBottom variant="h5">
					{title || name}
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
