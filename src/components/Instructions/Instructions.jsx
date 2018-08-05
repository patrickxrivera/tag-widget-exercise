import React from 'react';

import Section from './Section';
import TagsSkillsAssesmentMockup from './TagsSkillsAssesmentMockup.png'

import './Instructions.css'

function Instructions() {
  return (
    <div className="instructions">
      <Section title="React Tag Editor Widget">
        <p>
          The following is a fun little widget that can be used to experiment with new technologies while really helping get a full spectrum of all your skills. All the setup should be done and ready to go. All you have to do is dig in and start coding navigate to 'components/TagEditor/TagEditor.jsx' to begin.
        </p>
        <p>
          You may use any additional npm modules / components that are not included already to complete the widget.
        </p>

        <p>
          React is the only thing you need to use.
        </p>
        <p>
          Additionally redux and react-redux have been included in the package.json to save you the hassle of doing it if you prefer to use redux for state management.
        </p>
      </Section>
      <Section title="Mockup">
        <p>
          This is a diagramed mockup of the overall functionality of the The Tag Editor
        </p>
        <div className="mockup">
            <img alt="Mockup" src={TagsSkillsAssesmentMockup}/>
        </div>

      </Section>

      <Section title="Tag List">
        <p>
          A list of tags that have been added.<br />
          A tag is just an object with a label and color.<br /><br />
          It should be removed from the Tag List when clicking the X.
        </p>
      </Section>

      <Section title="New Tag Input">
        <p>
          It should make a new tag when typing into this input.<br />
          It should show a list of existing tags when focused.
        </p>
      </Section>

      <Section title="Existing Tags Dropdown">
        <p>
          A Dropdown showing already existing tags that have not been added to the "Tag List". <br /><br />
          It should populate the input  with the label and it should hide the “Selected Color” when clicked.<br />
          It should add the tag with its existing color to the “Tag List” when clicked.
        </p>
        <p>
          To get the list of existing tags there is a variable called [tagsJSON]
          located at the top of the TagsEditor file.
        </p>
      </Section>

      <Section title="Selected Color">
        <p>
          It should open the “Color Picker Popup” when clicked.<br />
          It should only be visible if the tag doesn’t already exist.<br />
          It should have a default color of “#0fade9” if no colors were chosen.
        </p>
      </Section>

      <Section title="Color Picker Popup">
        <p>It should update the background-color and "value" of “Selected Color” when clicked</p>
        <ul className="section-list">
          <li
            className="section-list-item"
            style={{ backgroundColor: "#0FADE9"}}
          >
            #0FADE9
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#0D40D9"}}
          >
            #0D40D9
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#F6524F"}}
          >
            #F6524F
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#9F0000"}}
          >
            #9F0000
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#05D9B5"}}
          >
            #05D9B5
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#00C361"}}
          >
            #00C361
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#FFCF2E"}}
          >
            #FFCF2E
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#FF7A1D"}}
          >
            #FF7A1D
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#B372E6"}}
          >
            #B372E6
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#5621A2"}}
          >
            #5621A2
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#8C8D91"}}
          >
            #8C8D91
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#3E4042"}}
          >
            #3E4042
          </li>
        </ul>
      </Section>

      <Section title="Add Tag Button">
        <p>
          It should add the new tag to the "Tag List" with the color selected from “Selected Color”<br />
          It should add an existing tag to the "Tag List" with its existing color.
          It should become an existing tag so that if it is removed it would show up in the “Existing Tag Dropdown”.
        </p>
      </Section>
    </div>
  );
}

export default Instructions;
