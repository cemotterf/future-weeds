import Card from "../UI/Card";
import StrainItem from "./StrainItem/StrainItem";
import classes from "./AvailableStrains.module.css";

const DUMMY_STRAINS = [
  {
    id: "s1",
    name: "24k Gold",
    description: "Potent hybrid marijuana strain",
    price: 22.99,
  },
  {
    id: "s2",
    name: "Amnesia Haze",
    description: "The perfect sativa strain to start your day",
    price: 16.5,
  },
  {
    id: "s3",
    name: "Blue Gelato",
    description: "A deliciously sweet hybrid marijuana strain",
    price: 12.99,
  },
  {
    id: "s4",
    name: "Dr. Who",
    description: "A potent indica-dominant hybrid marijuana strain",
    price: 18.99,
  },
];

const AvailableStrains = () => {
  const strainsList = DUMMY_STRAINS.map((strain) => (
    <StrainItem
      id={strain.id}
      key={strain.id}
      name={strain.name}
      description={strain.description}
      price={strain.price}
    />
  ));

  return (
    <section className={classes.strains}>
      <Card>
        <ul>{strainsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableStrains;
