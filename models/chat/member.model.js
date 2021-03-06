module.exports = (seq, { DataTypes, UUIDV4 }) =>
  seq.define(
    'Member',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      roomId: {
        type: DataTypes.UUID,
        allowNull: false
      }
    },
    {}
  )
