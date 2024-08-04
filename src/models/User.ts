import {Model, DataTypes} from 'sequelize'
import sequelize from '@/db_connection'

class User extends Model {
    declare id: number
    declare name: string
    declare preferred_name: string | null
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(),
            allowNull: false,
          },
          preferred_name: {
            type: DataTypes.STRING(),
          },
    },
    {
        tableName: 'users',
        sequelize,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
)

export default User;