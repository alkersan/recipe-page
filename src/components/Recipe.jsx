import React from "react";
import styled, { css } from "styled-components";
import { QUERIES } from "../constants.js";

const PrimarySection = ({ children, name }) => {
  return (
    <SectionWrapper>
      <SectionHeading>{name}</SectionHeading>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  & + & {
    border-top: 1px solid var(--color-neutral-lighter);
    padding-top: var(--section-spacing);
  }
`;

const SectionHeading = styled.h3`
  font: var(--font-heading-m);
  color: var(--color-primary);
`;

const SectionContent = styled.div`
  margin-top: 24px;
`;

const Recipe = () => {
  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo
          src="image-omelette.jpeg"
          alt="A freshly cooked omlet stuffed with vegetables and herbs"
        />
      </PhotoWrapper>
      <Content>
        <hgroup>
          <Title>Simple Omelette Recipe</Title>
          <Description>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
            cooked to perfection, optionally filled with your choice of cheese, vegetables, or
            meats.
          </Description>
        </hgroup>
        <Timing>
          <HeadingS>Preparation time</HeadingS>
          <DurationsList>
            <li>
              <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation:</strong> 5 minutes
            </li>
            <li>
              <strong>Cooking:</strong> 5 minutes
            </li>
          </DurationsList>
        </Timing>
        <PrimarySection name="Ingredients">
          <UnorderedList>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </UnorderedList>
        </PrimarySection>
        <PrimarySection name="Instructions">
          <OrderedList>
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of water or milk for a
              fluffier texture.
            </li>
            <li>
              <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add
              butter or oil.
            </li>
            <li>
              <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but
              are still slightly runny in the middle, sprinkle your chosen fillings over one half of
              the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one
              edge and fold it over the fillings. Let it cook for another minute, then slide it onto
              a plate.
            </li>
            <li>
              <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
            </li>
          </OrderedList>
        </PrimarySection>
        <PrimarySection name="Nutrition">
          <NutritionTable>
            <caption>
              The table below shows nutritional values per serving without the additional fillings.
            </caption>
            <tbody>
              <tr>
                <th scope="row">Calories</th>
                <td>277kcal</td>
              </tr>
              <tr>
                <th scope="row">Carbs</th>
                <td>0g</td>
              </tr>
              <tr>
                <th scope="row">Protein</th>
                <td>20g</td>
              </tr>
              <tr>
                <th scope="row">Fat</th>
                <td>22g</td>
              </tr>
            </tbody>
          </NutritionTable>
        </PrimarySection>
      </Content>
    </Wrapper>
  );
};

const PhotoWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    margin: 40px 40px 0 40px;
    border-radius: 12px;
    overflow: clip;
  }
`;
const Photo = styled.img``;

const Wrapper = styled.div`
  background-color: var(--color-white);
  max-width: 46rem;
  @media ${QUERIES.tabletAndUp} {
    border-radius: 24px;
  }
`;

const Content = styled.div`
  --section-spacing: 32px;

  padding-block: 40px;
  padding-inline: clamp(2rem, 1.317rem + 2.572vi, 2.5rem);

  display: flex;
  flex-direction: column;
  gap: var(--section-spacing);
`;

const Title = styled.h1`
  font: var(--font-heading-l-sm);
  color: var(--color-neutral-dark);
  font-size: clamp(2.25rem, 1.908rem + 1.286vi, 2.5rem);
`;

const Description = styled.p`
  margin-top: 24px;
`;

const HeadingS = styled.h2`
  font: var(--font-heading-s);
  color: var(--color-secondary);
`;

const Timing = styled.div`
  padding: 24px;
  background-color: var(--color-neutral-lightest);
  border-radius: 12px;
`;

const ListStyle = css`
  padding-left: 1.5rem;
  li {
    padding-left: 1rem;
    margin-top: 0.5rem;
    &:first-of-type {
      margin-top: 1rem;
    }
  }
  li::marker {
    color: var(--color-primary);
    font: var(--font-body-b);
  }
`;

const UnorderedList = styled.ul`
  ${ListStyle}
`;
const OrderedList = styled.ol`
  ${ListStyle}
`;

const DurationsList = styled(UnorderedList)`
  li::marker {
    color: var(--color-secondary);
  }
`;

const NutritionTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  caption,
  th,
  td {
    text-align: start;
  }

  caption {
    margin-bottom: 0.75rem;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-lighter);
  }

  th,
  td {
    padding-block: 0.75rem;
  }

  tr:last-child :is(th, td) {
    padding-bottom: 0;
  }

  th {
    padding-left: 2rem;
    font-weight: var(--regular);
  }

  td {
    padding-right: 2rem;
    color: var(--color-primary);
    font-weight: var(--bold);
  }
`;

export default Recipe;
