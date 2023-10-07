/**
 * @Author liming
 * @Date 2022/11/23 9:46
 **/
// import './comp1.module.scss'
//这种是全局引入，不要这么写
import styles from './comp1.module.scss'
const Comp = ()=>{
    return(
        // <div className="box">
        <div className={styles.box}>
            <p>这是Comp1里面的内容</p>
        </div>
    )
}

export default Comp
