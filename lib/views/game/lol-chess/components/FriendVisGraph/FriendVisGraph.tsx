import styles from './FriendVisGraph.module.scss';

export const FriendVisGraph = () => {};

export const FriendVisGraphLoading = () => {
  return (
    <div className={styles.graphWrap}>
      <p className={styles.loadingText}>loading...</p>
    </div>
  );
};
