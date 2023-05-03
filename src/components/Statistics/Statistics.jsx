import PropTypes from 'prop-types';
import { Cart, Label, Percentage, Title, List, Section } from './styles';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(el => (
          <Cart key={el.id}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage}%</Percentage>
          </Cart>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}
