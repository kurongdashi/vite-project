// 全局常量使用
import css from "./index.module.less";
import reactIcon from "@/assets/react.svg";
function App() {
  return (
    <div className={css.detail}>
      <div className={css.title}>
        这是详情页的标题{" "}
        <button className={css.btn} onClick={() => history.back()}>
          返回
        </button>
      </div>
      <div className={css.desc}>
        <img src={reactIcon} alt="图片" width={20} />
        详情页的描述哦详情页的描述哦详情页的描述哦详情页的描述哦
      </div>
    </div>
  );
}

export default App;
