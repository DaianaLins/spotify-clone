import React, { useState } from "react";
import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";
import { MdClear, MdOutlineOpenInNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const [data, setData] = useState(JSON.parse(user));
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <div className={styles.input_header}>
          <FiSearch color="#fff" size={24} className={styles.icon} />
          <input
            className={styles.input}
            placeholder="O que você quer ouvir?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          {search.length > 0 && (
            <MdClear
              color="#fff"
              size={24}
              className={styles.iconClear}
              onClick={() => setSearch("")}
            />
          )}
        </div>
        <h2 className={styles.name}>{data?.display_name}</h2>
        <img
          className={styles.img}
          onClick={() => setShowModal(!showModal)}
          src={data?.images[0]?.url}
          width={54}
          height={54}
          alt=""
        />
      </div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.button} onClick={()=> window.open("https://www.spotify.com/br-pt/account/overview/")}>
              <p className={styles.span}>Conta</p>
              <MdOutlineOpenInNew color="#fff"
              size={24}
              className={styles.iconNew} />
            </div>
            <div className={styles.button}>
              <p className={styles.span}>Perfil</p>
            </div>
            <div className={styles.button} onClick={() => logout()}>
              <p className={styles.span}>Sair</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
