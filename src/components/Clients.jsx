import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} gap-2 flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter}  lg:min-w-[192px] min-w=[120px]`}
        >
          <picture>
            <source srcSet={client.logoAvif} type="image/avif" />
            <img
              src={client.logo}
              alt="client_logo"
              className="lg:w-[192px] w-[100px]"
              loading="lazy"
            />
          </picture>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
