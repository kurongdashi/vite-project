// 全局常量使用
import css from "./index.module.less";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={css.home}>
      <div className={css.title}>
        这是首页页的标题 <Link to="/detail">详情</Link>
      </div>
      <div className={css.desc}>
        首页内容描述很多很多偶首页内容描述很多很多偶首页内容描述很多很多偶
      </div>
    </div>
  );
}

export default App;
