// https://github.com/GertjanReynaert/react-intl-translations-manager
import manageTranslations, { readMessageFiles, createSingleMessagesFile } from "react-intl-translations-manager"

import * as constants from "./src/app/constants/general"

const messagesDir = "extracted-messages"
const translationsDir = "src/app/l10n/"
const singleMessageFileDir = "."

manageTranslations({
    messagesDirectory: messagesDir,
    translationsDirectory: translationsDir,
    languages: constants.SUPPORTED_LANGUAGES,
})

const extractedMessages = readMessageFiles(messagesDir)

createSingleMessagesFile({
    messages: extractedMessages,
    directory: singleMessageFileDir,
    jsonSpaceIndentation: 4,
})
