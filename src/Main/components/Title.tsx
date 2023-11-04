import classes from './Title.module.css';

export default function Title ( {titleText} ) {
    return (
        <h1 className={classes.title}>
            {titleText}
        </h1>
    )
}