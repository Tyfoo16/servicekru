/**
 * ServiceKru Provider Application — Google Form generator.
 *
 * Setup:
 *   1. Open https://script.google.com → New project.
 *   2. Paste this file's contents into Code.gs.
 *   3. Run createServiceKruProviderForm(); approve OAuth scopes when prompted.
 *   4. Check the execution log (View → Logs) for the published & edit URLs.
 */

function createServiceKruProviderForm() {
  var form = FormApp.create('ServiceKru Provider Application')
    .setTitle('ServiceKru Provider Application')
    .setDescription(
      "Apply to become a certified ServiceKru. Choose the course you'd like to " +
      "train in and we'll get back to you within 24 hours."
    )
    .setConfirmationMessage(
      'Application Received! Our team will contact you within 24 hours to confirm ' +
      'your training details.'
    )
    .setCollectEmail(false)
    .setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(false);

  // --- User info ---

  form.addTextItem()
    .setTitle('First Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Last Name')
    .setRequired(true);

  var phoneValidation = FormApp.createTextValidation()
    .setHelpText('Please enter a valid Malaysian mobile number (e.g. +60 12-345 6789).')
    .requireTextMatchesPattern('^(\\+?60|0)[0-9\\-\\s]{8,}$')
    .build();
  form.addTextItem()
    .setTitle('Phone Number')
    .setHelpText('Malaysian mobile, e.g. +60 12-345 6789')
    .setRequired(true)
    .setValidation(phoneValidation);

  var emailValidation = FormApp.createTextValidation()
    .setHelpText('Please enter a valid email address.')
    .requireTextIsEmail()
    .build();
  form.addTextItem()
    .setTitle('Email Address')
    .setHelpText('your.email@example.com')
    .setRequired(true)
    .setValidation(emailValidation);

  form.addMultipleChoiceItem()
    .setTitle('Age Range')
    .setChoiceValues(['18–24', '25–34', '35–44', '45–54', '55+'])
    .setRequired(true);

  // --- Screening questions ---

  form.addMultipleChoiceItem()
    .setTitle('Which course would you like to train in?')
    .setHelpText('Select the training tier that best matches your interest.')
    .setChoiceValues([
      'Tier 1 — Basic Cleaning',
      'Tier 2 — Professional Cleaning',
      'Tier 3 — Childcare Assistant',
      'Tier 4 — Eldercare Assistant'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('What is your availability?')
    .setChoiceValues([
      'Part-time (under 20 hrs/week)',
      'Full-time (20+ hrs/week)',
      'Weekends only',
      'Flexible'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Which areas can you serve?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Kuala Lumpur',
      'Petaling Jaya',
      'Subang',
      'Shah Alam',
      'Klang',
      'Cheras',
      'Ampang',
      'Other'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Which languages do you speak?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Bahasa Malaysia',
      'English',
      'Mandarin',
      'Tamil',
      'Other'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Do you have your own transportation to job sites?')
    .setChoiceValues([
      'Yes — own vehicle',
      'Yes — public transport / e-hailing',
      'No — need assistance'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('When can you start training?')
    .setChoiceValues([
      'Immediately',
      'Within 2 weeks',
      'Within 1 month',
      'More than 1 month'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Do you have prior experience in cleaning, childcare, or elder care?')
    .setHelpText(
      'Briefly describe any past experience, including years and type of work. ' +
      'Leave blank if none — training is provided.'
    )
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Are you legally allowed to work in Malaysia?')
    .setChoiceValues([
      'Yes — Malaysian citizen',
      'Yes — permanent resident',
      'Yes — valid work permit',
      'No / Not sure'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('What is your highest level of education?')
    .setChoiceValues([
      'Primary school',
      'SPM / O-Levels',
      'STPM / A-Levels / Foundation',
      'Diploma',
      'Bachelor’s degree or higher',
      'Prefer not to say'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Do you have any health conditions that could affect physical work?')
    .setHelpText('This helps us match you to suitable jobs. All answers are kept confidential.')
    .setChoiceValues([
      'No',
      'Minor — can still perform most tasks',
      'Yes — prefer to discuss privately'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Why do you want to join ServiceKru?')
    .setHelpText('In one or two sentences, tell us what motivated you to apply.')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How did you hear about ServiceKru?')
    .setChoiceValues([
      'WhatsApp',
      'Facebook',
      'Instagram',
      'TikTok',
      'Friend or family',
      'Community group',
      'Other'
    ])
    .setRequired(false);

  // --- Consent ---

  var consent = form.addCheckboxItem()
    .setTitle('Consent')
    .setChoiceValues(['I agree to receive communications about training and updates from ServiceKru.'])
    .setRequired(true);
  var consentValidation = FormApp.createCheckboxValidation()
    .requireSelectAtLeast(1)
    .build();
  consent.setValidation(consentValidation);

  // --- Linked response spreadsheet ---

  var sheet = SpreadsheetApp.create('ServiceKru Provider Applications (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('Published form URL: %s', form.getPublishedUrl());
  Logger.log('Edit form URL:      %s', form.getEditUrl());
  Logger.log('Responses sheet:    %s', sheet.getUrl());
}
